package com.api.controller;

import com.api.model.UserModel;
import com.api.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api")
public class UserController {

    @Autowired
    private UserRepository repository;

    //Retorna os valores
    @GetMapping("/list")
    public List<UserModel> list(){
        return repository.findAll();
    }

    //Salva os valores
    @PostMapping("/save")
    public UserModel save(@RequestBody UserModel user){
        return repository.save(user);
    }

    @GetMapping(path = "/{Id}")
    public ResponseEntity consult(@PathVariable("Id") Integer Id){
        return repository.findById(Id).map(record -> ResponseEntity.ok().body(record)).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping(path = "delete/{Id}")
    public ResponseEntity delet(@PathVariable("Id") Integer Id){
        return repository.findById(Id).map(record -> { repository.deleteById(Id);
                    return ResponseEntity.ok().build();}).orElse(ResponseEntity.notFound().build());
    }

    @PutMapping(path = "update/{Id}")
    public ResponseEntity update(@PathVariable("Id") Integer Id, @RequestBody UserModel user){
        return repository.findById(Id).map(record -> {
            record.setName(user.getName());
            record.setCategory(user.getCategory());
            UserModel update = repository.save(record);
            return ResponseEntity.ok().body(update);
        }).orElse(ResponseEntity.notFound().build());
    }
}
