export class Requests {
    async fetchPost(url: string, data: any, cb: Function, retries: number = 5, timeout: number = 500) {
        const res = await new Promise((resolve, reject) => {
            function attemptFetch(remainingRetries: number) {
                let stopped = false;
                const id = remainingRetries ? setTimeout(() => (stopped = true) && attemptFetch(remainingRetries - 1), timeout) : undefined;
                fetch(url, {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data),
                    credentials: "same-origin"
                }).then(response => stopped || (clearTimeout(id), stopped = true, resolve(response))).catch(() => {})
            }
            attemptFetch(retries);
        });
        console.log(res);
        return cb(res);
    }

    async fetchGet(url: string, cb: Function, retries: number = 5, timeout: number = 500) {
        const res = await new Promise((resolve, reject) => {
            function attemptFetch(remainingRetries: number) {
                let stopped = false;
                const id = remainingRetries ? setTimeout(() => (stopped = true) && attemptFetch(remainingRetries - 1), timeout) : undefined;
                fetch(url, { credentials: "same-origin" }).then(response => stopped || (clearTimeout(id), stopped = true, resolve(response))).catch(() => {})
            }
            attemptFetch(retries);
        });
        console.log(res);
        return cb(res);
    }
}