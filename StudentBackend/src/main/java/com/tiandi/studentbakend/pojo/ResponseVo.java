package com.tiandi.studentbakend.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ResponseVo<T> {

    private String code;
    private T data;
    private String message;

}
