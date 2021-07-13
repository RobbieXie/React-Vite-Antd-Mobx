package com.tiandi.studentbakend.controller;

import com.tiandi.studentbakend.dao.StudentScoreRepository;
import com.tiandi.studentbakend.entity.StudentScore;
import com.tiandi.studentbakend.pojo.ResponseVo;
import com.tiandi.studentbakend.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

@RestController
@CrossOrigin
public class StudentController {

    @Autowired
    private StudentScoreRepository studentScoreRepository;

//    no need for already has pageable api
//    @GetMapping("/studentScores")
//    public ResponseVo getAllScores() {
//        return ResponseUtil.ok(studentScoreRepository.findAll());
//    }

    @GetMapping("page/studentScores")
    public ResponseVo getPageScores(@RequestParam(defaultValue = "1") int page,
                                    @RequestParam(defaultValue = "10") int size,
                                    @RequestParam(defaultValue = "") String name) {
        Pageable pageable = PageRequest.of(page - 1, size);
        Page<StudentScore> all;
        if (name.trim().isEmpty()) {
            all = studentScoreRepository.findAll(pageable);
        } else {
            all = studentScoreRepository.findAllByName(pageable, name);
        }
        return ResponseUtil.ok(all);
    }

    @PostMapping("/studentScores")
    public ResponseVo insert(@RequestBody StudentScore studentScore) {
        studentScore.setUpdateTime(new Date());
        return ResponseUtil.ok(studentScoreRepository.insert(studentScore));
    }

    @PutMapping("/studentScores/{id}")
    public ResponseVo update(@RequestBody StudentScore studentScore, @PathVariable String id) {
        return ResponseUtil.ok(studentScoreRepository.findById(id).map(originScore -> {
            originScore.setCourse(studentScore.getCourse());
            originScore.setName(studentScore.getName());
            originScore.setScore(studentScore.getScore());
            originScore.setUpdateTime(new Date());
            return studentScoreRepository.save(originScore);
        }).orElseGet(() -> {
            studentScore.setId(id);
            return studentScoreRepository.save(studentScore);
        }));
    }

    @DeleteMapping("/studentScores/{id}")
    public ResponseVo deleteById(@PathVariable String id) {
        studentScoreRepository.deleteById(id);
        return ResponseUtil.ok();
    }
}
