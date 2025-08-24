// Є функція sendDoneStatus:

type Callback = (item: string) => void;

function sendDoneStatus(callback: Callback) {
  callback("done");
}

// Завдання:

// Типізуйте параметр callback, щоб це була функція, яка приймає рядок і повертав void.
