package com.shop.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
public class OrderItem {

    @Id
    @Column(name = "order_item_id")
    @GeneratedValue
    private Long id;

    @ManyToOne //일대다 매핑
    @JoinColumn(name="item_id")
    private Item item;

    @ManyToOne //일대다 매핑
    @JoinColumn(name="order_id")
    private Order order;

    private int orderPrice; //주문 가격

    private int count; //수량

    private LocalDateTime regTime;
    
    private LocalDateTime updateTime;
}
