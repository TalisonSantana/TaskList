class ValidDescription {
  constructor(private description: string) {
    this.description = description;
  }
  valid(): void {
    if (this.description === undefined) {
      throw Object.assign(new Error("Description are required"), {
        code: 401,
      });
    }
    if (this.description.length < 5) {
      throw Object.assign(
        new Error("Description must be at least 5 characters long"),
        { code: 401 }
      );
    }
  }
}

export default ValidDescription;
