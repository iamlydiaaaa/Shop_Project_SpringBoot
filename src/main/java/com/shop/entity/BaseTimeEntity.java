package com.shop.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;

@EntityListeners(value = {AuditingEntityListener.class}) //Auditing 적용
@MappedSuperclass //공통 매핑 정보가 필요할 때 사용하는 어노테이션. 부모클래스를 상속받는 자식클래스에 매핑 정보만 제공한다.
@Getter
@Setter
public abstract class BaseTimeEntity {

    //보통 테이블에 등록일,수정일,등록자,수정자 모두 넣지만,
    //간혹 등록자,수정자를 넣지 않고, 등록일,수정자만 넣는 테이블을 위한 클래스

    @CreatedDate //엔티티가 생성되어 저장될 때, 시간을 자동으로 저장한다.
    @Column(updatable = false)
    private LocalDateTime regTime;

    @LastModifiedDate //엔티티의 값을 변경할 때, 시간을 자동으로 저장한다.
    private LocalDateTime updateTime;

}
