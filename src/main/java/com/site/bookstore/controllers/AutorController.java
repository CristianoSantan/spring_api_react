package com.site.bookstore.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.site.bookstore.entities.Autor;
import com.site.bookstore.repositorys.AutorRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/autores")
public class AutorController {
	
	@Autowired
	private AutorRepository autorRepository;
	
	@GetMapping
	public ResponseEntity<List<Autor>> findAll() {
		
		List<Autor> autores = autorRepository.findAll();
		
		return ResponseEntity.ok().body(autores);
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<Autor> findById(@PathVariable Long id) {
		
		Autor autor = autorRepository.findById(id).get();
		
		return ResponseEntity.ok().body(autor);
	}
}
