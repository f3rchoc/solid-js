/**
 * Code without srp principle.
 */


class UseCase {

    doSomethingWithTaxes() {
        console.log('Do something with taxes')
    }

    saveChangesInDatabase() {
        console.log('Save changes in DB')
    }

    sendEmail() {
        console.log('Send email')
    }

}

function start() {
    const myUseCase = new UseCase()
    myUseCase.doSomethingWithTaxes()
    myUseCase.saveChangesInDatabase()
    myUseCase.sendEmail()
}

start();