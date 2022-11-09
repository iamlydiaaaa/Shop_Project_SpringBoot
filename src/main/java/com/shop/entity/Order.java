package com.shop.entity;

import com.shop.constant.OrderStatus;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="orders")
@Getter
@Setter
public class Order {
    
    @Id
    @Column(name = "order_id")
    @GeneratedValue
    private Long id;

    @ManyToOne //일대다 매핑
    @JoinColumn(name="member_id")
    private Member member;
    
    @Enumerated(EnumType.STRING)
    private OrderStatus orderStatus; //주문상태
    
    private LocalDateTime orderDate; //주문일

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<OrderItem> orderItems = new ArrayList<>();

    private LocalDateTime regDate;
    private LocalDateTime updateDate;
    
}
