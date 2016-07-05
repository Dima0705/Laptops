using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Laptops.Models
{
    public class LaptopWithPicture
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int ReleaseDate { get; set; }
        public string Type { get; set; }
        public string CPU { get; set; }
        public string CPUName { get; set; }
        public short NumberOfCores { get; set; }
        public int CPUFrequency { get; set; }
        public short CPUConsumption { get; set; }
        public string BodyMaterial { get; set; }
        public string BodyColor { get; set; }
        public string CapMaterial { get; set; }
        public string CapColor { get; set; }
        public string IsStrength { get; set; }
        public short Width { get; set; }
        public short Depth { get; set; }
        public short Thickness { get; set; }
        public short Weight { get; set; }
        public double ScreenDiagonal { get; set; }
        public short ScreenHeightPx { get; set; }
        public short ScreenWidthPx { get; set; }
        public string ScreenTechnology { get; set; }
        public string ScreenSurface { get; set; }
        public bool IsTouchScreen { get; set; }
        public bool Is3DScreen { get; set; }
        public string TypeRAM { get; set; }
        public short SizeRAM { get; set; }
        public short MaxSizeRAM { get; set; }
        public short NumberOfRAMSlots { get; set; }
        public string TypeHD { get; set; }
        public short SizeHD { get; set; }
        public short SpeedHD { get; set; }
        public string GA { get; set; }
        public string TypeGA { get; set; }
        public short SizeVRAM { get; set; }
        public short NumberOfBatteryCells { get; set; }
        public int Price { get; set; }
        public string MainPicture { get; set; }
        public List<Picture> PictureList { get; set; }

        public LaptopWithPicture(Laptop obj)
        {
            Id = obj.Id;
            Name = obj.Name;
            ReleaseDate = obj.ReleaseDate;
            Type = obj.Type;
            CPU = obj.CPU;
            CPUName = obj.CPUName;
            NumberOfCores = obj.NumberOfCores;
            CPUFrequency = obj.CPUFrequency;
            CPUConsumption = obj.CPUConsumption;
            BodyMaterial = obj.BodyMaterial;
            BodyColor = obj.BodyColor;
            CapMaterial = obj.CapMaterial;
            CapColor = obj.CapColor;
            IsStrength = obj.IsStrength;
            Width = obj.Width;
            Depth = obj.Depth;
            Thickness = obj.Thickness;
            Weight = obj.Weight;
            ScreenDiagonal = obj.ScreenDiagonal;
            ScreenHeightPx = obj.ScreenHeightPx;
            ScreenWidthPx = obj.ScreenWidthPx;
            ScreenTechnology = obj.ScreenTechnology;
            ScreenSurface = obj.ScreenSurface;
            IsTouchScreen = obj.IsTouchScreen;
            Is3DScreen = obj.Is3DScreen;
            TypeRAM = obj.TypeRAM;
            SizeRAM = obj.SizeRAM;
            MaxSizeRAM = obj.MaxSizeRAM;
            NumberOfRAMSlots = obj.NumberOfRAMSlots;
            TypeHD = obj.TypeHD;
            SizeHD = obj.SizeHD;
            SpeedHD = obj.SpeedHD;
            GA = obj.GA;
            TypeGA = obj.TypeGA;
            SizeVRAM = obj.SizeVRAM;
            NumberOfBatteryCells = obj.NumberOfBatteryCells;
            Price = obj.Price;
            MainPicture = obj.MainPicture;
        }
    }
}