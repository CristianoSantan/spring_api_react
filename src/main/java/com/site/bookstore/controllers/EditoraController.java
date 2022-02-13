package com.site.bookstore.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.site.bookstore.entities.Editora;
import com.site.bookstore.repositorys.EditoraRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/editoras")
public class EditoraController {
	
	@Autowired
	private EditoraRepository editoraRepository;
	
	@GetMapping
	public ResponseEntity<List<Editora>> findAll() {
		
		List<Editora> editoras = editoraRepository.findAll();
		
		return ResponseEntity.ok().body(editoras);
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<Editora> findById(@PathVariable Long id) {
		
		Editora editora = editoraRepository.findById(id).get();
		
		return ResponseEntity.ok().body(editora);
	}
}
