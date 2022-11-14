package com.shop.entity;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;

@Getter
@Setter
@ToString
@Table(name = "board")
@Entity
public class Board {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long seq;

//    @Column(insertable=false, updatable=false, columnDefinition = "number default 0")
    @Column(insertable=false, updatable=false)
    private Long cnt;

    private String content;

    //    @Column(insertable=false, updatable=false, columnDefinition = "date default current_date")
//    private Date createDate;
    @Column(insertable=false, updatable=false)
    private LocalDateTime createDate;

    private String title;

    @Column(updatable=false)
    private String writer;









}
