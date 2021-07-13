package com.tiandi.studentbakend.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class PageableResponseVo<T> extends ResponseVo<T> {
    private Integer currentPage;
    private Integer totalPage;
    private Long totalCount;

    public PageableResponseVo(String code, T data, String message,
                              Integer currentPage, Integer totalPage, Long totalCount) {
        super(code, data, message);
        this.currentPage = currentPage;
        this.totalPage = totalPage;
        this.totalCount = totalCount;
    }
}
