package fr.mathieugeissler.constructmanager.repository;

import fr.mathieugeissler.constructmanager.domain.Division;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Division entity.
 */
@SuppressWarnings("unused")
@Repository
public interface DivisionRepository extends JpaRepository<Division, Long> {

}
