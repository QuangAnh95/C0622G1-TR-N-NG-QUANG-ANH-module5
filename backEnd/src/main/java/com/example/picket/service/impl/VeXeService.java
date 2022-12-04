package com.example.picket.service.impl;

import com.example.picket.dto.IVeXeDto;
import com.example.picket.model.VeXe;
import com.example.picket.repository.IVeXeRepository;
import com.example.picket.service.IVeXeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class VeXeService implements IVeXeService {
    @Autowired
    private IVeXeRepository veXeRepository;

    @Override
    public Page<IVeXeDto> hienThiVeXe(String diemDenSearch, String diemDiSearch,String gioSearch, Pageable pageable) {
        return veXeRepository.hienThiVeXe(diemDenSearch,diemDiSearch,gioSearch,pageable);
    }

    @Override
    public Optional<VeXe> findAllId(Integer id) {
        return veXeRepository.findById(id);
    }

    @Override
    public void delete(Integer id) {
        veXeRepository.deleteVeXeBy(id);
    }

    @Override
    public void updateVeXe(VeXe veXe) {
        veXeRepository.save(veXe);
    }
}
