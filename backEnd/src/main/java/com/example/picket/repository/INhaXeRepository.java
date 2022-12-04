package com.example.picket.repository;

import com.example.picket.model.NhaXe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface INhaXeRepository extends JpaRepository<NhaXe,Integer> {
}
