export function mockRequest(data: any): Promise<any> {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.05) {
      alert(JSON.stringify(data, null, 2));
      setTimeout(() => {
        resolve(data);
      }, 1000);
    } else {
      setTimeout(() => {
        reject('Error');
      }, 1000);
    }
  });
}
