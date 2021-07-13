package com.tiandi.studentbakend.controller;

import com.tiandi.studentbakend.pojo.ResponseVo;
import com.tiandi.studentbakend.util.ResponseUtil;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

/**
 * 异常控制处理器
 *
 * @author wliduo[i@dolyw.com]
 * @date 2018/8/30 14:02
 */
@RestControllerAdvice
public class ExceptionAdvice {

    /**
     * 捕捉自定义异常
     * @return
     */
    @ResponseStatus(HttpStatus.OK)
    @ExceptionHandler(Exception.class)
    public ResponseVo handle(Exception e) {
        return ResponseUtil.error(e.getMessage());
    }

}
