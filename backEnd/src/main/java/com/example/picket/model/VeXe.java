package com.example.picket.model;

import javax.persistence.*;

@Entity
public class VeXe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private int giaVe;
    private String diemDi;
    private String diemDen;
    private String ngayKhoiHanh;
    private String gioKhoiHanh;
    private int soLuong;
    private boolean isDelete;

    @ManyToOne
    @JoinColumn(name = "nha_xe_id",referencedColumnName = "id")
    private NhaXe nhaXe;

    public VeXe() {
    }

    public VeXe(int giaVe, String diemDi, String diemDen, String ngayKhoiHanh, String gioKhoiHanh, int soLuong, NhaXe nhaXe) {
        this.giaVe = giaVe;
        this.diemDi = diemDi;
        this.diemDen = diemDen;
        this.ngayKhoiHanh = ngayKhoiHanh;
        this.gioKhoiHanh = gioKhoiHanh;
        this.soLuong = soLuong;
        this.nhaXe = nhaXe;
    }

    public VeXe(Integer id, int giaVe, String diemDi, String diemDen, String ngayKhoiHanh, String gioKhoiHanh, int soLuong, NhaXe nhaXe) {
        this.id = id;
        this.giaVe = giaVe;
        this.diemDi = diemDi;
        this.diemDen = diemDen;
        this.ngayKhoiHanh = ngayKhoiHanh;
        this.gioKhoiHanh = gioKhoiHanh;
        this.soLuong = soLuong;
        this.nhaXe = nhaXe;
    }


    public Integer getId() {
        return id;
    }

    public boolean isDelete() {
        return isDelete;
    }

    public void setDelete(boolean delete) {
        isDelete = delete;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public int getGiaVe() {
        return giaVe;
    }

    public void setGiaVe(int giaVe) {
        this.giaVe = giaVe;
    }

    public String getDiemDi() {
        return diemDi;
    }

    public void setDiemDi(String diemDi) {
        this.diemDi = diemDi;
    }

    public String getDiemDen() {
        return diemDen;
    }

    public void setDiemDen(String diemDen) {
        this.diemDen = diemDen;
    }

    public String getNgayKhoiHanh() {
        return ngayKhoiHanh;
    }

    public void setNgayKhoiHanh(String ngayKhoiHanh) {
        this.ngayKhoiHanh = ngayKhoiHanh;
    }

    public String getGioKhoiHanh() {
        return gioKhoiHanh;
    }

    public void setGioKhoiHanh(String gioKhoiHanh) {
        this.gioKhoiHanh = gioKhoiHanh;
    }

    public int getSoLuong() {
        return soLuong;
    }

    public void setSoLuong(int soLuong) {
        this.soLuong = soLuong;
    }

    public NhaXe getNhaXe() {
        return nhaXe;
    }

    public void setNhaXe(NhaXe nhaXe) {
        this.nhaXe = nhaXe;
    }
}
