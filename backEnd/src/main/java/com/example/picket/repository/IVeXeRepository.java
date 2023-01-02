package com.example.picket.repository;

import com.example.picket.dto.IVeXeDto;
import com.example.picket.model.VeXe;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;



@Repository
public interface    IVeXeRepository extends JpaRepository<VeXe, Integer> {
    @Query(value = "SELECT  ve_xe.diem_den as diemDen,  ve_xe.diem_di as diemDi,  ve_xe.gia_ve as giaVe,  ve_xe.gio_khoi_hanh as gioKhoiHanh, " +
            " ve_xe.ngay_khoi_hanh as ngayKhoiHanh,  ve_xe.so_luong as soLUong, nha_xe.ten_nha_xe as tenNhaXe, ve_xe.id as id " +
            "from ve_xe " +
            "join nha_xe on nha_xe.id = ve_xe.nha_xe_id " +
            "where  ve_xe.diem_den like %:diemDenSearch% and  ve_xe.diem_di like %:diemDiSearch%  and ve_xe.gio_khoi_hanh like %:gioSearch% " +
            "and ve_xe.is_delete = 0 ",
            countQuery = "select count(*) " +
                    "from ve_xe " +
                    "join nha_xe on nha_xe.id = ve_xe.nha_xe_id " +
                    "where ve_xe.diem_den like %:diemDenSearch% and  ve_xe.diem_di like %:diemDiSearch% and ve_xe.gio_khoi_hanh like %:gioSearch% " +
                    "and ve_xe.is_delete = 0 ",
            nativeQuery = true)
    Page<IVeXeDto> hienThiVeXe(@Param("diemDenSearch") String diemDenSearch,
                               @Param("diemDiSearch") String diemDiSearch,
                               @Param("gioSearch") String gioSearch,
                               Pageable pageable);

    @Modifying
    @Transactional
    @Query(value = "UPDATE ve_xe set is_delete = 1 where ve_xe.id = :id",nativeQuery = true)
    void deleteVeXeBy(@Param("id") Integer id);

}
