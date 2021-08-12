package com.srm.userbackend.userbackend.Config;

import java.util.Collections;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Bean;
import springfox.documentation.spring.web.plugins.Docket;

import springfox.documentation.spi.DocumentationType;

import springfox.documentation.swagger2.annotations.EnableSwagger2;

import springfox.documentation.builders.PathSelectors;

import springfox.documentation.builders.RequestHandlerSelectors;

import springfox.documentation.service.ApiInfo;

import springfox.documentation.service.Contact;

@Configuration
@EnableSwagger2
public class Swagger {
    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2).select().paths(PathSelectors.ant("/api/**"))
                .apis(RequestHandlerSelectors.basePackage("com.srm")).build().apiInfo(apiInfo());
    }

    private ApiInfo apiInfo() {
        return new ApiInfo("CreditCard Portal Documentation",
                "This documentation involves Signup, Login,Application controller, Card Controller,Cibil Controller and Admin Controller.",
                "Version 1.0", "Terms of Service", new Contact("Bank Page", "www.bankofsrm.com", "bankofsrm@gmail.com"),
                "License of API", "Api Licene url", Collections.emptyList());

    }

}