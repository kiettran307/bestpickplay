interface DataProps {
  name?: string;
  email: string;
  message: string;
}

export const SendEmail = async (data: DataProps) => {
  return await fetch("/api/email", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  })
}
