package com.tiandi.studentbakend.dao;

import com.tiandi.studentbakend.entity.StudentScore;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface StudentScoreRepository extends MongoRepository<StudentScore, String> {

    Page<StudentScore> findAllByName(Pageable pageable, String name);
}
