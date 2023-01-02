package com.example.picket.cotroller;

import com.example.picket.dto.IVeXeDto;
import com.example.picket.dto.VeXeDto;
import com.example.picket.model.NhaXe;
import com.example.picket.model.VeXe;
import com.example.picket.service.INhaXeService;
import com.example.picket.service.IVeXeService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
public class VeXeController {
    @Autowired
    private IVeXeService veXeService;

    @Autowired
    private INhaXeService nhaXeService;

    @GetMapping("list")
    public ResponseEntity<Page<IVeXeDto>> hienThiVeXe(
            Pageable pageable,
            @RequestParam(value = "diemDenSearch", defaultValue = "", required = false) String diemDenSearch,
            @RequestParam(value = "diemDiSearch", defaultValue = "", required = false) String diemDiSearch,
            @RequestParam(value = "gioSearch", defaultValue = "", required = false) String gioSearch) {

        Page<IVeXeDto> veXeDtoPage = veXeService.hienThiVeXe(diemDiSearch, diemDenSearch, gioSearch, pageable);
        if (veXeDtoPage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(veXeDtoPage, HttpStatus.OK);
    }

    @GetMapping("/nhaXe-list")
    public ResponseEntity<List<NhaXe>> hienThiNhaXe() {

        List<NhaXe> nhaXes = nhaXeService.findAll();
        if (nhaXes.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(nhaXes, HttpStatus.OK);
    }


    @DeleteMapping("/delete/{id}")
    public ResponseEntity<VeXe> delete(@PathVariable Integer id) {
        Optional<VeXe> veXeOptional = veXeService.findAllId(id);
        if (veXeOptional.isPresent()) {
            veXeService.delete(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PatchMapping("edit/{id}")
    public ResponseEntity<?> editVeXe(@RequestBody @Valid VeXeDto veXeDto, BindingResult bindingResult,
                                      @PathVariable Integer id) {
        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(bindingResult.getFieldError(), HttpStatus.BAD_REQUEST);
        }
        Optional<VeXe> veXe = veXeService.findAllId(id);
        if (veXe.isPresent()) {
            BeanUtils.copyProperties(veXeDto, veXe.get());
            veXeService.updateVeXe(veXe.get());
            return new ResponseEntity<>(HttpStatus.OK);

        } else {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }

    @GetMapping("findById/{id}")
    public ResponseEntity<VeXe> findById(@PathVariable Integer id) {
        Optional<VeXe> veXe = veXeService.findAllId(id);
        if (veXe.isPresent()) {
            return new ResponseEntity<>(veXe.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
