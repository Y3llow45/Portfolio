package main

import (
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	r.GET("/projects", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "Here are your projects",
			"projects": []string{"Frontend Project 1", "Backend Project 2", "DevOps Project 3"},
		})
	})

	r.Run()
}
