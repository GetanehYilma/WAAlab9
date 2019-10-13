package mum.edu.controller;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import mum.edu.domain.Employee;
 
@Controller
@RequestMapping(value = {"/", "/employee"})
public class EmployeeController {


    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String displayEmployee(){
        return "employee";
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public @ResponseBody Employee addEmployee(@Valid @RequestBody Employee employee){

        return employee;
    }

	
 
	
	
}
