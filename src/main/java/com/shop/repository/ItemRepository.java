package com.shop.repository;

import com.shop.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ItemRepository extends JpaRepository<Item, Long> {

    List<Item> findByItemNm(String itemNm); //이름으로 조회하기

    List<Item> findByItemNmOrItemDetail(String itemNm, String itemDetail); //상품명 or 상세설명으로 조회하기

    List<Item> findByPriceLessThan(Integer price); // 낮은 가격 조회하기

    List<Item> findByPriceLessThanOrderByPriceDesc(Integer price); // 지정한 가격보다 낮은 항목 검색 후 가격이 높은순으로 조회

    @Query("select i from Item i " +
            "where i.itemDetail like %:itemDetail% " +
            "order by i.price desc")
    List<Item> findByItemDetail(@Param("itemDetail") String itemDetail);


    @Query(value = "select * from item i " +
            "where i.item_detail like %:itemDetail% " +
            "order by i.price desc", nativeQuery = true)
    List<Item> findByItemDetailByNative(@Param("itemDetail") String itemDetail);
}
