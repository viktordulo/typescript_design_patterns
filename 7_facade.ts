interface Complaint {
    id: number;
    type: 'user' | 'server';
    details: string;
}

class Complaints {
    complaints: Complaint[] = [];

    reply(complaint: Complaint) {
        return `Thanks for your feedback. Your error id: ${complaint.id}. We\'ll check it and contact you.\n(${complaint.details})`;
    }

    add(complaint: Complaint) {
        this.complaints.push(complaint);
        return this.reply(complaint);
    }
}

class UserComplaints extends Complaints {
    reply(complaint: Complaint) {
        return `User complaint. ${super.reply(complaint)}`;
    }
}

class ServerComplaints extends Complaints {
    reply(complaint: Complaint) {
        return `Server complaint. ${super.reply(complaint)}`;
    }
}

class ComplaintRegistry {
    register(type: 'user' | 'server', details: string) {
        let instance: Complaints;
        const complaint: Complaint = {
            id: Date.now(),
            type: type,
            details: details
        }

        switch (complaint.type) {
            case 'server':
                instance = new ServerComplaints();
                break;

            case 'user':
                instance = new UserComplaints();
                break;
        }

        return instance.add(complaint);
    }
}

const registry = new ComplaintRegistry();

console.log(registry.register('user', 'I can\'t press the button'));
console.log(registry.register('server', 'Data can\'t be sent'));