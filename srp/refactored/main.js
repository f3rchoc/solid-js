class UseCase {

    constructor(repo, notifier) {
        this.repo = repo;
        this.notifier = notifier;
    }

    doSomethingWithTaxes() {
        console.log('Do something with taxes')
    }

    saveChangesInDatabase() {
        this.repo.add();
    }

    sendEmail() {
        this.notifier.notify('hi')
    }

}

class Repository {

    add() {
        console.log('adding in database')
    }

    update() {
        console.log('updating in database')
    }

    remove() {
        console.log('deleting fronm database')
    }

    find() {
        console.log('finding from database')
    }

}

class NotificationService {
    notify(message) {
        console.log('Sending a message...');
        console.log(message);
    }
}

function start() {
    const repo = new Repository();
    const notifier = new NotificationService();
    const useCase = new UseCase(repo, notifier);
    useCase.doSomethingWithTaxes()
    useCase.saveChangesInDatabase()
    useCase.sendEmail()

}

start();