class Student {
	constructor(name,email,community) {
		this.name= name;
		this.email = email;
		this.community = community;
	}
}

class Bootcamp {
	constructor(name,level,students = []) {
		this.name = name;
		this.level = level;
		this.students = students;
	}
	registerStudent(s) {
		const found = this.students.some(n => n.email === s.email);
        if (!found) {
			this.students.push(s);
			console.log(`Registering ${s.email} to the bootcamp ${this.level}.`);	
		}
		else {console.log(`${s.email} already exists`);}
		return this.students;
	}
}
