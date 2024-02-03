import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../../styles/theme";
import Search from "../../../assets/imgs/search.svg";
import { Tag } from '../tag/tag';

interface AutoInputProps {
    label?: string;
    suggestions: string[];
    placeholder?: string;
    value?: string | undefined;
}

export const AutoInput = ({
    label,
    placeholder,
    value,
    suggestions,
}: AutoInputProps) => {
    const [inputValue, setInputValue] = useState("");
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [tags, setTags] = useState<string[]>([]);
    const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setInputValue(inputValue);

        const filtered = suggestions.filter(
            (suggestion) =>
                suggestion.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
        );

        setFilteredSuggestions(filtered);
    };

    const handleSelect = (value: string) => {
        setInputValue("");
        setFilteredSuggestions([]);
        setSelectedTag(value);
        setTags((prevTags) => [...prevTags, value]);
    };

    const handleTagDelete = (tag: string) => {
        setSelectedTag(null);
        setTags((prevTags) => prevTags.filter((t) => t !== tag));
    };

    return (
        <Wrapper>
            <Top>
                {selectedTag && (
                    <Tag
                        key={selectedTag}
                        label={selectedTag}
                        onDelete={() => handleTagDelete(selectedTag)}
                    />
                )}
                <Label>{label}</Label>
            </Top>
            <Container>
                <Icon>
                    <img src={Search} />
                </Icon>
                <Input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    placeholder={placeholder}
                />
            </Container>
            <Suggestions>
                {filteredSuggestions.map((suggestion, index) => (
                    <Suggestion key={index} onClick={() => handleSelect(suggestion)}>
                        {suggestion}
                    </Suggestion>
                ))}
            </Suggestions>
        </Wrapper>
    );
};

const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Input = styled.input`
  display: flex;
  padding: 8px;
  font-size: 16px;
`;

const Icon = styled.div`
  cursor: pointer;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div<{ height?: string; width?: string }>`
  width: 408px;
  display: flex;
  gap: 4px;
  box-sizing: border-box;
  border: 1px solid ${theme.color.gray__1};
  border-radius: 2px;
  transition: 100ms all ease-in-out;
  &:focus-within {
    border: 1px solid ${theme.color.one};
  }
`;

const Label = styled.div`
  font-size: 12px;
  color: ${theme.color.gray__1};
`;

const Suggestions = styled.div`
  width: 99%;
  background-color: ${theme.color.white};
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Suggestion = styled.div`
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${theme.color.zero};
    color: ${theme.color.white};
  }
`;
