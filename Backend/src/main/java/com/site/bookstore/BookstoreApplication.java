package com.site.bookstore;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.site.bookstore.entities.Autor;
import com.site.bookstore.entities.Editora;
import com.site.bookstore.entities.Livro;
import com.site.bookstore.repositorys.AutorRepository;
import com.site.bookstore.repositorys.EditoraRepository;
import com.site.bookstore.repositorys.LivroRepository;

@SpringBootApplication
public class BookstoreApplication implements CommandLineRunner {
	
	@Autowired
	private AutorRepository autorRepository;
	
	@Autowired
	private EditoraRepository editoraRepository;
	
	@Autowired
	private LivroRepository livroRepository;

	public static void main(String[] args) {
		SpringApplication.run(BookstoreApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		
		
		/*
		Autor a1 = new Autor(null, "George", "R.R. Martin");
		Autor a2 = new Autor(null, "Tom", "Clancy");
		
		Editora e1 = new Editora(null, "Suma");
		Editora e2 = new Editora(null, "Matrix");
		Editora e3 = new Editora(null, "Twister");
		
		Livro l1 = new Livro(null, "Raibow Six", (long) 654, 149.9, a2, e3);
		Livro l2 = new Livro(null, "A Guerra dos Tronos", (long) 321, 199.9, a1, e1);
		
		a1.getLivros().addAll(Arrays.asList(l2));
		a2.getLivros().addAll(Arrays.asList(l1));
		
		e1.getLivros().addAll(Arrays.asList(l2));
		e3.getLivros().addAll(Arrays.asList(l1));
		
		autorRepository.save(a1);
		autorRepository.save(a2);
		
		editoraRepository.save(e1);
		editoraRepository.save(e2);
		editoraRepository.save(e3);
		
		livroRepository.save(l1);
		livroRepository.save(l2);
		*/
		
	}

}
