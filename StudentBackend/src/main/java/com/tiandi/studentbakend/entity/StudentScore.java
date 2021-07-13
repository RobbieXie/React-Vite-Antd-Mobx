package com.tiandi.studentbakend.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import org.springframework.data.annotation.Id;

import java.util.Date;

@Data
public class StudentScore {

    @Id
    private String id;
    private String name;
    private String course;
    private Integer score;
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss",timezone="GMT+8")
    private Date updateTime;
}
