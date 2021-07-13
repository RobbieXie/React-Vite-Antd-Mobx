package com.tiandi.studentbakend.util;


import com.tiandi.studentbakend.pojo.PageableResponseVo;
import com.tiandi.studentbakend.pojo.ResponseVo;
import org.springframework.data.domain.Page;

@SuppressWarnings("unchecked")
public class ResponseUtil {

    private static final String OK = "1000";
    private static final String ERROR = "1001";

    public static <T> ResponseVo ok() {
        return new ResponseVo(OK, null, "success");
    }

    public static <T> ResponseVo ok(T data) {
        return new ResponseVo(OK, data, "success");
    }

    public static PageableResponseVo ok(Page page) {
        return new PageableResponseVo(OK, page.getContent(), "success",
                page.getNumber() + 1, page.getTotalPages(), page.getTotalElements());
    }

    public static <T> ResponseVo error(String message) {
        return new ResponseVo(ERROR, null, message);
    }

}
