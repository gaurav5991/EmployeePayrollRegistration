class EmployeePayrollData {
    
    get id(){
        return this._id;
    }
    set id(id){
        this._id = id;
    }

    get name() {
        return this._name;
    }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(name))
            this._name = name;
        else throw "Name is incorrect!";
    }

    get profilePic() {
        return this._profilePic;
    }
    set profilePic(profilePic) {
        this._profilePic = profilePic;
    }

    get department() {
        return this._department;
    }
    set department(department) {
        this._department = department;
    }

    get salary() {
        return this._salary;
    }
    set salary(salary) {
        let salaryRegex = RegExp('^[1-9]{1}[0-9]*$');
        if (salaryRegex.test(salary))
            this._salary = salary;
        else throw "Salary should be non zero positive number";
    }

    get gender() {
        return this._gender;
    }
    set gender(gender) {
        if (gender != undefined) {
            let genderRegex = RegExp('^(Male|Female)$');
            if (genderRegex.test(gender)) {
                this._gender = gender;
            } else {
                throw "Gender incorrect";
            }
        }
    }

    get note() {
        return this._note;
    }
    set note(note) {
        this._note = note;
    }

    get startDate() {
        return this._startDate;
    }
    set startDate(startDate) {
        if (startDate != undefined) {
            if (startDate <= new Date()) {
                const options = { year: "numeric", month: "long", day: "numeric" };
                const employeeDate = startDate.toLocaleDateString("en-US", options);
                this._startDate = employeeDate;
            }
            else throw "Select valid date!";
        }
    }

    toString() {
        return "id: " + this.id + ", Name: " + this.name + ", Salary: " + this.salary + ", Gender: " + this.gender + ", Start Date: " + this.startDate + ", Department: " + this.department + ", Profile Pic: " + this.profilePic + "Note: " + this.note;
    }
} 