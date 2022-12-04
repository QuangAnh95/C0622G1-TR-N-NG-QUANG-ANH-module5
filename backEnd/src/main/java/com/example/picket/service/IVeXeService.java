package com.example.picket.service;

import com.example.picket.dto.IVeXeDto;
import com.example.picket.model.VeXe;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface IVeXeService {

    Page<IVeXeDto> hienThiVeXe(String diemDenSearch,
                               String diemDiSearch,
                               String gioSearch,
                               Pageable pageable);

    Optional<VeXe> findAllId(Integer id);

    void delete(Integer id);

    void updateVeXe(VeXe veXe);
}
