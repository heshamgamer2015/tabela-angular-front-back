package app.service;

import app.entity.Carro;
import app.repository.CarroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import app.dto.CarroDTO;

import java.util.ArrayList;
import java.util.List;

@Service
public class CarroService {

    @Autowired
    private CarroRepository carroRepository;

    public List<CarroDTO> listAll(){
        List<Carro> lista = carroRepository.findAll();
        List<CarroDTO> listaDTO = new ArrayList<>();

        for (int i=0; i<lista.size(); i++)
            listaDTO.add(this.toCarroDTO(lista.get(i)));
        return listaDTO;

    }
    public CarroDTO save(CarroDTO carroDTO){
        Carro carro = this.toCarro(carroDTO);

        Carro carrosalvo = carroRepository.save(carro);

        return this.toCarroDTO(carrosalvo);
    }

    private CarroDTO toCarroDTO(Carro carro) {
        CarroDTO carroDTO = new CarroDTO();
        carroDTO.setId(carro.getId());
        carroDTO.setModelo(carro.getModelo());
        carroDTO.setAno(carro.getAno());
        return carroDTO;
    }

    private Carro toCarro(CarroDTO carroDTO) {
        Carro carro = new Carro();
        carro.setId(carroDTO.getId());
        carro.setModelo(carroDTO.getModelo());
        carro.setAno(carroDTO.getAno());
        return carro;
    }
    public void deletar(Long id) {
        carroRepository.deleteById(id);
    }


}
