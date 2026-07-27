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
                repository.save(new Product("Laptop Gamer", 1299.99, "Laptop de alto rendimiento para desarrollo y juegos"));
                repository.save(new Product("Teclado Mecánico RGB", 89.90, "Teclado mecánico con switches red silenciosos"));
                repository.save(new Product("Mouse Inalámbrico", 45.50, "Mouse ergonómico de alta precisión 16000 DPI"));
                repository.save(new Product("Monitor 4K IPS", 349.00, "Monitor de 27 pulgadas Ultra HD 144Hz"));
            }
        };
    }
}
