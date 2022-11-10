package com.shop.dto;

import com.shop.entity.ItemImg;
import lombok.Getter;
import lombok.Setter;
import org.modelmapper.ModelMapper;

@Getter
@Setter
public class ItemImgDto {

    private Long id;

    private String imgName;

    private String oriImgName;

    private String imgUrl;

    private String repImgYn;

    private static ModelMapper modelMapper = new ModelMapper();

//    ItemImg 엔티티를 파라미터로 받아서,
    // ItemImg 객체의 자료형&멤버변수 이름이 같을 때, ItemImgDto로 값을 복사해서 반환함.
    //static으로 선언하여 ItemImgDto 객체를 생성하지 않아도 호출할 수 있도록 함.
    public static ItemImgDto of(ItemImg itemImg) {
        return modelMapper.map(itemImg,ItemImgDto.class);
    }

}
