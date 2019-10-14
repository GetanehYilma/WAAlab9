package mum.edu.exception;

public class EmployeeException extends RuntimeException {

        private String exceptionMessage = "No Employee Found";

    public EmployeeException() {
    }

    public String getExceptionMessage() {
        return exceptionMessage;
    }
}
