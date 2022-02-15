package com.site.bookstore.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.site.bookstore.entities.Livro;
import com.site.bookstore.repositorys.LivroRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/livros")
public class LivroController {
	
	@Autowired
	private LivroRepository livroRepository;
	
	@GetMapping
	public ResponseEntity<List<Livro>> findAll() {
		
		List<Livro> livros = livroRepository.findAll();
		
		return ResponseEntity.ok().body(livros);
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<Livro> findById(@PathVariable Long id) {
		
		Livro livro = livroRepository.findById(id).get();
		
		return ResponseEntity.ok().body(livro);
	}
	
	// CREATE
    @PostMapping
    public Livro createEmployee(@RequestBody Livro livro) {
    	
        return livroRepository.save(livro);
    }
}
