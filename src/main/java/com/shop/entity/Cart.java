package com.shop.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

//Cart 엔티티는 Member 엔티티를 참조하는 일대일 단방향 매핑이다.
@Entity
@Table(name="cart")
@Getter @Setter
@ToString
public class Cart {
    @Id
    @Column(name = "cart_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToOne(fetch = FetchType.LAZY) //일대일 매핑
    @JoinColumn(name="member_id")
    private Member member;
}
