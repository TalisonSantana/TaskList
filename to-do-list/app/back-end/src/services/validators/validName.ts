class ValidName {
  constructor(private name: string) {
    this.name = name;
  }
  valid(): void {
    if (this.name === undefined) {
      throw Object.assign(new Error("Name are required"), {
        code: 401,
      });
    }
    if (this.name.length < 3) {
      throw Object.assign(
        new Error("Name must be at least 3 characters long"),
        { code: 401 }
      );
    }
  }
}

export default ValidName;
