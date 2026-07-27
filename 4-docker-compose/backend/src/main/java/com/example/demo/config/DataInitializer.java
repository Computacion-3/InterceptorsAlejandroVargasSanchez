package com.example.demo.config;

import com.example.demo.model.Product;
import com.example.demo.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initDatabase(ProductRepository repository) {
        return args -> {
            if (repository.count() == 0) {
                repository.save(new Product("Laptop Gamer Dockerized", 1399.99, "Laptop configurada con Docker Compose"));
                repository.save(new Product("Teclado Mecánico RGB", 95.00, "Teclado con layout en español y switches brown"));
                repository.save(new Product("Mouse Gamer Inalámbrico", 55.00, "Mouse ultraligero 26000 DPI"));
                repository.save(new Product("Monitor 4K Docker", 399.99, "Monitor IPS 28 pulgadas HDR400"));
            }
        };
    }
}
