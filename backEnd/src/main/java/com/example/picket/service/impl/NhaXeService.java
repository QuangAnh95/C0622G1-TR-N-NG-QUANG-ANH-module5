package com.example.picket.service.impl;

import com.example.picket.model.NhaXe;
import com.example.picket.repository.INhaXeRepository;
import com.example.picket.service.INhaXeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NhaXeService implements INhaXeService {
    @Autowired
    private INhaXeRepository nhaXeRepository;

    @Override
    public List<NhaXe> findAll() {
        return nhaXeRepository.findAll();
    }
}
