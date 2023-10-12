package app.repository;

import app.dto.LivroDTO;
import app.entity.Livro;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LivroRepository extends JpaRepository<Livro,Long> {
}
