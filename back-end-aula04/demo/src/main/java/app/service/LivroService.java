package app.service;


import app.dto.CarroDTO;
import app.dto.LivroDTO;
import app.entity.Carro;
import app.entity.Livro;
import app.repository.LivroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class LivroService {

    @Autowired
    private LivroRepository livroRepository;

    public List<LivroDTO> listAll(){
        List<Livro> lista = livroRepository.findAll();
        List<LivroDTO> listaDTO = new ArrayList<>();

        for (int i=0; i<lista.size(); i++)
            listaDTO.add(this.tolivroDTO(lista.get(i)));
        return listaDTO;

    }


}
