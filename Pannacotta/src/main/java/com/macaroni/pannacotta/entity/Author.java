package com.macaroni.pannacotta.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Author {

  @Id
  @GeneratedValue(strategy = GenerationType.SEQUENCE)
  private Long authorId;
  @Column(nullable = false)
  private String firstName;
  @Column(nullable = false)
  private String lastName;

  public Author() {
  }

  public Author(Long id, String firstName, String lastName) {
    this.authorId = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public Author(String firstName, String lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public Long getAuthorId() {
    return authorId;
  }

  public void setAuthorId(Long authorId) {
    this.authorId = authorId;
  }

  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  @Override
  public int hashCode() {
    final int prime = 31;
    int result = 1;
    result = prime * result + ((authorId == null) ? 0 : authorId.hashCode());
    return result;
  }

  @Override
  public boolean equals(Object obj) {
    if (this == obj)
      return true;
    if (obj == null)
      return false;
    if (getClass() != obj.getClass())
      return false;
    Author other = (Author) obj;
    if (authorId == null) {
      if (other.authorId != null)
        return false;
    } else if (!authorId.equals(other.authorId))
      return false;
    return true;
  }

  @Override
  public String toString() {
    return "Author [authorId=" + authorId + ", firstName=" + firstName + ", lastName=" + lastName + "]";
  }
}
