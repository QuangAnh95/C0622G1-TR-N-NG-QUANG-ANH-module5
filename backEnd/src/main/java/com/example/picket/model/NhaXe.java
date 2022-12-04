package com.example.picket.model;

import javax.persistence.*;

@Entity
public class NhaXe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String tenNhaXe;

    public NhaXe() {
    }

    public NhaXe(String tenNhaXe) {
        this.tenNhaXe = tenNhaXe;
    }

    public NhaXe(Integer id, String tenNhaXe) {
        this.id = id;
        this.tenNhaXe = tenNhaXe;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTenNhaXe() {
        return tenNhaXe;
    }

    public void setTenNhaXe(String tenNhaXe) {
        this.tenNhaXe = tenNhaXe;
    }
}
