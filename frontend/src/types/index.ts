export type SignupInputs = {
  fullName: string;
  username: string;
  password: string;
  confirmPassword: string;
  gender: string;
};

export type LoginInputs = {
  username: string;
  password: string;
};

export type AuthUserType = {
  id: string;
  fullName: string;
  email: string;
  profilePic: string;
  gender: string;
};

export type ConversationType = {
  id: string;
  fullName: string;
  profilePic: string;
};

export type MessageType = {
  id: string;
  body: string;
  senderId: string;
  createdAt: string;
};
