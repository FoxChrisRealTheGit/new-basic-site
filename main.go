package main

import (
	"log"
	"net/http"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-contrib/static"
	"github.com/gin-gonic/autotls"
	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/acme/autocert"
	"golang.org/x/sync/errgroup"
)

var (
	g errgroup.Group
)

func main() {
	server01 := &http.Server{
		Addr:         ":443",
		Handler:      frontend(),
		ReadTimeout:  5 * time.Second,
		WriteTimeout: 10 * time.Second,
	}
	/* used for development */

	g.Go(func() error {
		return server01.ListenAndServe()
	})

	if err := g.Wait(); err != nil {
		log.Fatal(err)
	}
}

func frontend() http.Handler {
	app := gin.New()
	app.Use(gin.Recovery())
	app.Use(static.Serve("/", static.LocalFile("./pkg/build", false)))
	//allows all connection requests
	app.Use(cors.Default())

	//use contact form endpoint

	m := autocert.Manager{
		Prompt:     autocert.AcceptTOS,
		HostPolicy: autocert.HostWhitelist("foxchrisrealthe.com"),
		Cache:      autocert.DirCache("/var/www/.cache"),
	}
	autotls.RunWithManager(app, &m)

	return app
}

